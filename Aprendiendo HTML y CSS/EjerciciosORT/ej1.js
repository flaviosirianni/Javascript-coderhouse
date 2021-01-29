/*Ejercicio 1.

Una institución educativa ofrece cursos técnicos pertenecientes a diferentes disciplinas y
oficios (mecánica, electricidad, plomería, etc.).

Cada curso requiere una escolaridad mínima necesaria, y puede ofrecerse en
diversos momentos del año. A cada una de estas “tandas” se la llama Cursada.
Para cada cursada se indica fecha de apertura, cupo de inscriptos y quién es el
profesor que lo dicta.

Para inscribirse en un curso, éste debe tener cupo disponible. Quienes quieran
hacerlo deben estar primero registrados en la institución y cumplir con los requisitos de
escolaridad del curso.

Tomando en cuenta el enunciado descripto:

a) Diseñá el diagrama de clases correspondiente.

b) Desarrollá el algoritmo asociado al método registrarAlumno(...) de la clase
Institución. Este método recibe como parámetros los datos de un alumno
(Documento, Nombre, Apellido y Escolaridad). Debe devolver como parámetro un
valor booleano con true si logró registrar al alumno y con false en caso de que el
alumno ya exista registrado en la Institución.
Pista: Creá el método buscarAlumnoPorDocumento(...) de la clase Institucion, al
cual pasándole un dni nos devolverá la instancia de Alumno, o un null si no lo
encuentra.

c) Desarrollá el algoritmo del método inscribirAlumnoEnCurso(...) el cual pertenece a la
clase Institución y recibe como parámetros el dni del Alumno que desea inscribirse
y la instancia de la Cursada en la cual éste desea inscribirse. El método devuelve un
valor booleano indicando si la inscripción fue exitosa.
*/

let bdAlumnos = [];
let bdProfesores = ["Martinez","Gomez","Sanchez","Rui Costa"];
let bdCursos = [];

let auxiliarAlumnos = null;

class Cursada{
    constructor(idCurso, especialidad, fechaInicio, cupox, profesor, alumnado){
        this.idCurso = idCurso;
        this.especialidad = especialidad;
        this.fechaInicio = fechaInicio;
        this.cupo = cupox;
        this.profesor = profesor;
        this.alumnos = alumnado;
    }
}

class Institucion{
    constructor(bdCursos, bdAlumnos, bdProfesores){
        this.cursos = bdCursos;
        this.alumnos = bdAlumnos;
        this.profesores = bdProfesores;
    }
    buscarAlumnoPorDNI(doc){
        let verificador = false;
        for(let i = 0;i<this.alumnos.length;i++){
            if(doc == this.alumnos[i].dni){
                verificador = true;
                auxiliarAlumnos = this.alumnos[i];
                break;
            } else {
                verificador = false;
            }
        }
        return verificador;
    }
    registrarAlumno(doc,name,lastName,scolar){
        let verificador = false;
        if(this.buscarAlumnoPorDNI(doc) == true){
            verificador = false;
        } else {
            verificador = true;
            let nuevoAlumno = new Alumno(doc, name, lastName, scolar);
            this.alumnos.push(nuevoAlumno);
        }
        return verificador;
    }
    buscarCursoPorID(cursoID){
        for(let i = 0;i<this.cursos.length;i++){
            if(cursoID = this.cursos[i].idCurso){
                return this.cursos[i];
            }   
        }
    }
    verSiHayCupo(cursoID){
        let verificador = false;
        let aux = this.buscarCursoPorID(cursoID);
        if(aux.alumnos.length < aux.cupo){
            verificador = true;
        }
        return verificador;
    }
    inscribirAlumnoEnCurso(doc,cursoID){
        let verificador = false;
        if((elCole.buscarAlumnoPorDNI(doc)==true)&&(elCole.verSiHayCupo(cursoID)==true)){
                let alumnoPorInscribirse = auxiliarAlumnos;
                let cursoAfectado = this.buscarCursoPorID(cursoID);
                cursoAfectado.alumnos.push(alumnoPorInscribirse);
                let verificador = true;
                console.log(verificador);
                return verificador;
        }
    }
}

class Alumno{
    constructor(doc, name, lastName, scolar){
        this.dni = doc;
        this.nombre = name;
        this.apellido = lastName;
        this.escolaridad = scolar;
    }
}

let elCole = new Institucion(bdCursos,bdAlumnos,bdProfesores);

let electronica_1 = new Cursada(1,"Electronica","15/03/21",30,"Martinez",[]);
let mecanica_1 = new Cursada(2,"Mecanica",04/04/21,25,"Gomez",[]);

bdCursos.push(electronica_1);
bdCursos.push(mecanica_1);

let alumno_1 = new Alumno(36123123,"Franco","Marino",true);
let alumno_2 = new Alumno(42054213,"Lucas","Lucalez",true);
let alumno_3 = new Alumno(17450879,"Mariana","Kramerz",true);
let alumno_4 = new Alumno(26854781,"Ximena","Acardix",true);

bdAlumnos.push(alumno_1);
bdAlumnos.push(alumno_2);
bdAlumnos.push(alumno_3);
bdAlumnos.push(alumno_4);


elCole.inscribirAlumnoEnCurso(36123123,1);
console.log(electronica_1);


