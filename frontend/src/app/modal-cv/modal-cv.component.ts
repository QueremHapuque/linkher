import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  Field: string;
}

@Component({
  selector: 'app-modal-cv',
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.css']
})
export class ModalCvComponent {
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
  expertiseTechnologie: string | undefined;
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

  public saveFormation(fieldType: string) {
    let data;
    if (fieldType == 'education') {
      data = [
        {
          institution: this.institution,
          courseName: this.courseName,
        }
      ];
    }
    else if (fieldType == 'experience') {
      data = [
        {
          officeName: this.officeName,
          company: this.company,
        }
      ];
    }
    else if (fieldType == 'language') {
      data = [
        {
          languageName: this.languageName,
          expertiseLanguage: this.expertiseLanguage,
        }
      ];
    }
    else if (fieldType == 'technology') {
      data = [
        {
          technologieName: this.technologieName,
          expertiseTechnologie: this.expertiseTechnologie,
        }
      ];
    }
    else if (fieldType == 'certification') {
      data = [
        {
          certificationName: this.certificationName,
          certificationInstitution: this.certificationInstitution,
        }
      ];
    }
    else if (fieldType == 'softSkills') {
      data = [
        {
          softSkill: this.softSkill,
        }
      ];
    }
    this.dialogRef.close(data);
  }

  public close() {
    this.dialogRef.close();
  }
}
