import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/contacts.model';
import { AlertController, Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/PhotoService';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private photoService: PhotoService,
    private platform: Platform
  ) {}

  contactos: Contacts[] = [
    { nombre: 'Juan S', telefono: '1234567890', mail: 'juan@example.com', photo: '' },
    { nombre: 'Mateo', telefono: '9876543210', mail: 'mateo@example.com', photo: '' }

  ];

  nombreInput = '';
  telefonoInput = '';
  mailInput = '';
  photoSrc = '';
  photoEdited = false;
  newContactPhotoSrc = '';

  isModalOpen = false;
  anadirContacto = false;
  contactoActual: any;

  ngOnInit() {
    this.loadContacts();
    this.updateSearchedContacts();
    this.organizeArray();

    Camera.requestPermissions();
  }

  // Carga el Array 'contactos'
  async loadContacts() {
    let usuarios = localStorage.getItem('dataUser');

    if (usuarios !== null) {
      this.contactos = JSON.parse(usuarios);
      this.updateSearchedContacts();
    }

    this.nombreInput = '';
    this.telefonoInput = '';
    this.mailInput = '';
  }

  // Agrega un contacto nuevo al Array 'contactos'
  async agregarContacto() {
    if (this.nombreInput.trim() === '' || this.telefonoInput === '') {
      await this.showAlert(
        'Error',
        'Por favor, complete los campos requeridos (*).'
      );
      return;
    }

    if (isNaN(Number(this.telefonoInput))) {
      await this.showAlert(
        'Error',
        'El telefono contiene caracteres invalidos'
      );
      return;
    }

    if (this.telefonoInput.length != 10) {
      await this.showAlert('Error', 'El telefono debe tener 10 digitos');
      return;
    }

    this.contactos.push(
      new Contacts(
        this.nombreInput,
        this.telefonoInput,
        this.mailInput,
        this.newContactPhotoSrc
      )
    );
    localStorage.setItem('dataUser', JSON.stringify(this.contactos));

    this.nombreInput = '';
    this.telefonoInput = '';
    this.mailInput = '';
    this.anadirContacto = false;
    this.newContactPhotoSrc = '';
    this.loadContacts();
    this.organizeArray();
  }

  // Crea una alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  // Abri el modal donde se crea un nuevo contacto
  abrirNuevoContacto(Abierto: boolean) {
    this.anadirContacto = Abierto;
    this.nombreInput = '';
    this.telefonoInput = '';
    this.mailInput = '';
    this.photoSrc = '';
  }

  // Limpia el formulario del contacto existente
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (isOpen === false) {
      this.nombreInput = '';
      this.telefonoInput = '';
      this.mailInput = '';
    }
  }

  // Carga un modal con la informacion del contacto existente seleccionado 
  async abrirModal(contacto: object) {
    this.contactoActual = contacto;
    this.isModalOpen = true;
    this.nombreInput = this.contactoActual.nombre;
    this.telefonoInput = this.contactoActual.telefono;
    this.mailInput = this.contactoActual.mail;
  }

  // Guarda los datos del contacto existente
  async guardarCambios() {
    this.contactoActual.nombre = this.nombreInput;
    this.contactoActual.telefono = this.telefonoInput;
    this.contactoActual.mail = this.mailInput;
    
    if (this.nombreInput.trim() === '' || this.telefonoInput === '') {
      await this.showAlert(
        'Error',
        'Por favor, complete los campos requeridos (*).'
      );
      return;
    }

    if (isNaN(Number(this.telefonoInput))) {
      await this.showAlert(
        'Error',
        'El telefono contiene caracteres invalidos'
      );
      return;
    }

    if (this.telefonoInput.length != 10) {
      await this.showAlert('Error', 'El telefono debe tener 10 digitos');
      return;
    }

    if (this.photoEdited){
      this.contactoActual.photo = this.photoSrc;
    }

    this.isModalOpen = false;
    this.organizeArray();

    localStorage.setItem('dataUser', JSON.stringify(this.contactos));
    
    this.photoEdited = false;
    this.photoSrc = '';
  }

  // Alerta Boton eliminar
  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Eliminar contacto Cancelado');
      },
    },
    {
      text: 'Eliminar',
      role: 'confirm',
      handler: () => {
        console.log('Eliminar contacto');
        this.eliminarContacto();
      },
    },
  ];

  // Elimina el contacto seleccionado
  async eliminarContacto(){
    console.log('Se elimino el contacto con nombre: ' + this.contactoActual);
    const index = this.contactos.indexOf(this.contactoActual);

    if (index > -1) {
      this.contactos.splice(index, 1);
      localStorage.setItem('dataUser', JSON.stringify(this.contactos));
      this.isModalOpen = false;
      this.organizeArray();

      await this.showAlert(
        'Eliminar Contacto',
        'Se eliminó correctamente el contacto con nombre: ' + this.contactoActual.nombre
      );
    } else {
      await this.showAlert(
        'Error',
        'No se encontró el contacto: ' + this.contactoActual.nombre + 'en tu lista de contactos'
      );
    }
  }

  // Organiza el Array 'contactos'
  organizeArray() {
    this.contactos.sort(function (a: any, b: any) {
      let x = a.nombre.toLowerCase();
      let y = b.nombre.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  searchedContact: any;
  searchText!: string;

  // Captura el texto de la barra de busqueda
  searchContact(event: any) {
    this.searchText = event.detail.value;
    this.updateSearchedContacts();
  }

  // Actualiza la el Array 'Contactos' segun lo que hallamos escrito
  updateSearchedContacts() {
    const text = this.searchText?.trim().toLowerCase();

    if (text && text !== '') {
      this.searchedContact = this.contactos.filter((contact: any) => {
        return contact.nombre.toLowerCase().includes(text);
      });
    } else {
      this.searchedContact = this.contactos;
    }
  }

  // Metodo para tomar una foto y/o guardar la foto seleccionada
  async newPhoto(n: boolean) {
    try {
      const photoData = await this.photoService.AddNewToGallery();

      if (photoData && photoData.webPath && n === false) {
        this.photoSrc = photoData.webPath;
        this.photoEdited = true;
        this.contactoActual.photo = this.photoSrc;
      }else if(n === true && photoData.webPath){
        this.newContactPhotoSrc = photoData.webPath;
      } else {
        console.error('No se pudo obtener la URL de la foto.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  llamar() {
    if (this.platform.is('cordova')) {
      const numeroTelefono = this.contactoActual.telefono;

      if (numeroTelefono) {
        window.open(`tel:${numeroTelefono}`, '_system');
      } else {
        console.error('El número de teléfono no está definido.');
      }
    } else {
      console.log('Esta funcionalidad solo está disponible en dispositivos móviles.');
    }
  }

  async correo() {
    if (this.platform.is('cordova')) {
      const direccionCorreo = this.contactoActual.mail;
      if (direccionCorreo) {
        window.open(`mailto:${direccionCorreo}`, '_system');
      } else {
        await this.showAlert(
          'Error',
          'El contacto: ' + this.contactoActual.nombre + 'no tiene un email registrado'
        );
      }
    } else {
      console.log('Esta funcionalidad solo está disponible en dispositivos móviles.');
    }
  }

  sms(){
    if (this.platform.is('cordova')) {
      const numeroTelefono = this.contactoActual.telefono;
      if (numeroTelefono) {
        window.open(`sms:${numeroTelefono}`, '_system');
      } else {
        console.error('El número de teléfono no está definido.');
      }
    } else {
      console.log('Esta funcionalidad solo está disponible en dispositivos móviles.');
    }
  }

}

