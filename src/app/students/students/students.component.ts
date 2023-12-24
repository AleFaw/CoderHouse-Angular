import { Component, Input} from '@angular/core';
import { CargaComponent } from '../../carga/carga/carga.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CargaComponent, CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})


export class StudentsComponent {

  listaAlumnos: string[] = [];

  nuevosAlumnos(nuevoAlumno: string)
  {
    this.listaAlumnos.push(nuevoAlumno);
  }
  
  ngOnInit(){}

}
