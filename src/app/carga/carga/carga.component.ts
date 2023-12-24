import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsComponent } from '../../students/students/students.component';

@Component({
  selector: 'app-carga',
  standalone: true,
  imports: [FormsModule, StudentsComponent],
  templateUrl: './carga.component.html',
  styleUrl: './carga.component.scss'
})



export class CargaComponent {

  @Output() mandarAlumno = new EventEmitter<string>()

  @ViewChild('alumnoInput') alumnoInput!: ElementRef<HTMLInputElement>

  enviarAlumno(alumno: string)
  {
    if(alumno == "")
    {
      alert("No puede dejar el nombre vacio!!");
    }
    else
    {
      this.mandarAlumno.emit(alumno);
      this.alumnoInput.nativeElement.value="";
    }
    
  }


}
