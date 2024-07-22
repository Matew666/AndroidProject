import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoadingController } from '@ionic/angular';

declare var responsiveVoice: any;

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})

export class TranslatorPage implements OnInit {
  data: any[] = [];
  translatedText!: string;

  textInput: string = '';
  characters: number = 0;

  constructor(private apiService: ApiService, private loadingCtrl: LoadingController) {}

  isoLanguages = [
    { code: 'en', name: 'English', voice: 'UK English Female' },
    { code: 'es', name: 'Spanish', voice: 'Spanish Female' },
    { code: 'fr', name: 'French', voice: 'French Female' },
    { code: 'de', name: 'German', voice: 'Deutsch Male' },
    { code: 'it', name: 'Italian', voice: 'Italian Male' },
    { code: 'pt', name: 'Portuguese', voice: 'Portuguese Female' },
    { code: 'ru', name: 'Russian', voice: 'Russian Female' },
    { code: 'zh', name: 'Chinese', voice: 'Chinese Female' },
    { code: 'ja', name: 'Japanese', voice: 'Japanese Female' },
    { code: 'ar', name: 'Arabic', voice: 'Arabic Female' },
    { code: 'ko', name: 'Korean', voice: 'Korean Female' },
    { code: 'hi', name: 'Hindi', voice: 'Hindi Female' },
    { code: 'bn', name: 'Bengali', voice: 'UK English Female' },
    { code: 'pa', name: 'Punjabi', voice: 'UK English Female' },
    { code: 'jv', name: 'Javanese', voice: 'UK English Female' },
    { code: 'te', name: 'Telugu', voice: 'UK English Female' },
    { code: 'ta', name: 'Tamil', voice: 'Tamil Male' },
    { code: 'ur', name: 'Urdu', voice: 'UK English Female' },
    { code: 'pl', name: 'Polish', voice: 'Polish Female' },
    { code: 'uk', name: 'Ukrainian', voice: 'Ukrainian Female' },
    { code: 'nl', name: 'Dutch', voice: 'Dutch Female' },
    { code: 'el', name: 'Greek', voice: 'Greek Female' },
    { code: 'tr', name: 'Turkish', voice: 'Turkish Female' },
    { code: 'sv', name: 'Swedish', voice: 'Swedish Female' },
    { code: 'no', name: 'Norwegian', voice: 'Norwegian Female' },
    { code: 'fi', name: 'Finnish', voice: 'Finnish Female' },
    { code: 'da', name: 'Danish', voice: 'Danish Female' },
    { code: 'he', name: 'Hebrew', voice: 'Hebrew Female' }
];


  ngOnInit(): void {
    this.llenarData();
    this.wordCounter;
  }

  wordCounter() {
    this.characters = this.textInput.length;
  }

  selectedLanguageCode: string = 'es';
  selectedLanguageVoice: string = 'Spanish Female';
  languageLabel: string = 'Spanish';

  destinationLanguageCode: string = 'en';
  destinationLanguageVoice: string = 'UK English Female';
  languageLabel1: string = 'English';

  selectLanguage(code: string, voice: string, name:string): void {

    if(name == this.languageLabel1){
      this.alternateLanguage();
    }else{
      this.selectedLanguageCode = code;
    }

    this.languageLabel = name;
    this.selectedLanguageVoice = voice;

    console.log('par de lenguajes seleccionado: ' + this.selectedLanguageCode + '|' + this.destinationLanguageCode);
  }
 
  destinationLanguage(code: string, voice: string, name: string): void {
    
    if(name == this.languageLabel){
      this.alternateLanguage();
    }else{
      this.destinationLanguageCode = code;
    }

    this.languageLabel1 = name;
    this.destinationLanguageVoice = voice;

    console.log('par de lenguajes seleccionado: ' + this.selectedLanguageCode + '|' + this.destinationLanguageCode);
  }

  alternateLanguage(){
    console.log('Alternando lenguaje');

    let tempCode =  this.selectedLanguageCode;
    this.selectedLanguageCode = this.destinationLanguageCode;
    this.destinationLanguageCode = tempCode;

    let temptext = this.textInput;
    this.textInput = this.translatedText;
    this.translatedText = temptext;

    let tempVoice = this.selectedLanguageVoice;
    this.selectedLanguageVoice = this.destinationLanguageVoice;
    this.destinationLanguageVoice = tempVoice;

    let templanguage = this.languageLabel;
    this.languageLabel = this.languageLabel1;
    this.languageLabel1 = templanguage;
  }

  llenarData() {
    let text = this.textInput;
    let langpair = this.selectedLanguageCode + '|' + this.destinationLanguageCode;
    // console.log('par de lenguajes seleccionado: ' + langpair);

    if(this.textInput === ''){
      text = ' ';
    }

    this.apiService.getData(text, langpair).subscribe((data) => {
      this.translatedText = data.responseData.translatedText;
      this.data = data;
      console.log(data);
    });
  }

  copyText(text: string): void {
    const Copiedtext = text;
    navigator.clipboard.writeText(Copiedtext).then(() => {
      console.log('Text copied to clipboard');
      this.showLoading()
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  }

  playText(text: string, rate: number): void {
    console.log('Voz: ' + this.selectedLanguageVoice);
    const voice = this.selectedLanguageVoice;
    responsiveVoice.speak(text, voice, rate);
  }

  playTraduction(text: string, rate: number): void {
    console.log('Voz: ' + this.destinationLanguageVoice);
    const voice = this.destinationLanguageVoice;
    responsiveVoice.speak(text, voice, rate);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Texto copiado en el portapapeles',
      duration: 500,
      spinner: null,
    });

    loading.present();
  }

}
