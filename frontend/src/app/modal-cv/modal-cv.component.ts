import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Field: string;
}

@Component({
  selector: 'app-modal-cv',
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.css']
})
export class ModalCvComponent implements OnInit {
  fieldType: string;

  @Input()
  // Formação
  courseName: string | undefined;
  institution: string | undefined;
  // Experiências
  officeName: string | undefined;
  company: string | undefined;
  // Idiomas
  languageName: string | undefined;
  expertiseLanguage: string | undefined;
  // Tecnologias
  technologieName: string | undefined;
  expertiseTechnologiee: string | undefined;
  // Certificações
  certificationName: string | undefined;
  certificationInstitution: string | undefined;
  // Experiências
  softSkill: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalCvComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: DialogData,
  ) {
    this.fieldType = this.dataModal.Field
  }
  ngOnInit(): void {
    console.log('courseName -> ', this.courseName);
    console.log('institution -> ', this.institution);
  }

  public saveFormation() {
    const data = {
      institution: this.institution,
      courseName: this.courseName,
    };
    this.dialogRef.close(data);
  }

  public close() {
    this.dialogRef.close();
  }
}
