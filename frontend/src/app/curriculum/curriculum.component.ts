import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalCvComponent } from '../modal-cv/modal-cv.component';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})

export class CurriculumComponent {

  constructor(
    public dialog: MatDialog,
  ) {}
  
  states = [
    { name: 'Pernambuco', value: 'pe' },
    { name: 'Alagoas', value: 'al' },
    { name: 'Sergipe', value: 'se' },
    { name: 'Ceará', value: 'ce' }
  ];
  

  @Input()
  name: string | undefined;
  @Input()
  email: string | undefined;
  education: any;
  selectedState: string | undefined;
  selectedCounty: string | undefined;
  listCounty: any;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    if (this.nameFormControl.hasError('required')) {
      return 'Este campo é obrigatório!';
    }

    return this.emailFormControl.hasError('email') ? 'Esse não é um email válido!' : '';
  }

  clickSelectedState(state: string) {
    this.selectedState = state;
    if (state == 'pe') {
      this.listCounty = [
        { name: 'Recife', value: 'recife' },
        { name: 'Jaboatão', value: 'jaboatao' },
        { name: 'Olinda', value: 'olinda' }
      ]
    }
    else if (state == 'al') {
      this.listCounty = [
        { name: 'Água Branca', value: 'aguabranca' },
        { name: 'Maceió', value: 'maceio' }
      ]
    }
    else if (state == 'se') {
      this.listCounty = [
        { name: 'Aracajú', value: 'aracaju' },
        { name: 'Lagarto', value: 'lagarto' }
      ]
    }
    else if (state == 'ce') {
      this.listCounty = [
        { name: 'Juazeiro do Norte', value: 'juazeiro' }
      ]
    }
  }

  clickSelectedCounty(state: string) {
    this.selectedCounty = state;
  }

  clickSave() {
    if (!this.name || !this.email || !this.selectedState || !this.selectedCounty) {
      console.log('campos obrigatorios nao preenchidos!')
    }
  }

  openDialog(typeField: string) {
    const modalOpen = this.dialog.open(ModalCvComponent, {
      disableClose: true,
      data: { Field: typeField }
    });
    modalOpen.afterClosed().subscribe(result => {
      console.log("result -> ", result)
      if (result) {
        this.education = JSON.stringify(result);
        console.log("AAAAAAAAAAAAAAAAAAA")
        console.log(this.education)
      }
    });
  }

}


