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
    /* ------------- TIP: Nombre de parámetros en el constructor --------------
        Conviene usar siempre los mismos nombres entre parámetros y atributos en el constructor
        y luego diferenciarlos con this.... Eso hace que sea mucho más fácil de leer 
        para un 3ero
        Ejemplo this.alumnos = alumnado quedaría mejor this.alumnos = alumnos
    */
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
    /* ------------- TIP: No usar break en el for --------------
        No es buena práctica usar el break en el for. Esto es así porque la convención indica
        que si vas a usar un for es porque querés recorrer TODO el rango definido si o si. Entonces
        si el código lo mira un 3ero no tiene que preocuparse de ver si hay un break que te interrumpa el ciclo
        y puede confiar que el rango se va a recorrer completo. 
        Cuando en un ciclo hay una condición que lo puede interrumpir (lo que acá llevó al break), la estructura
        que hay que usar es el while(), donde la condición de corte va a ser esa condición que llevó al break. 
    */

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

    /* ------------- TIP: No preguntar por true en el if --------------
        El if() recibe como parámetro una expresión booleana, es decir un algoritmo que resulta en true o false.
        Entonces, sin importar lo que se especifique en el if, por dentro siempre termina quedando if(true) o if(false)
        Por ejemplo, un if que se ejecute si el numero es positivo
        if(x > 0) {...}
        if(5 > 0) al momento de ejecutarlo, el compilador lo simplifica y le queda if(true) y avanza. 
        Esto quiere decir que jamás necesitamos incluir esto " ... == true" en la expresión del if, porque en última
        instancia el compilador va a llegar a if(true == true) osea true, o if(false == true) osea false. Fijate que
        siempre prevalece la primera condición. 
        En este ejemplo if (this.buscarAlumnoPorDNI(doc) == true) va a terminar quedando if(true == true) osea true, o if(false == true)
        osea false. Entonces conviene directamente dejarlo como if (this.buscarAlumnoPorDNI(doc))

        Nota: fijate que en el if de verSiHayCupo() estás usando una expresión booleana sin comparar con "... == true". Así debe ser!
    */
    registrarAlumno(doc,name,lastName,scolar){
        let verificador = false;
        if (this.buscarAlumnoPorDNI(doc) == true){
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
    /* ------------- TIP: Nombre de funciones de checkeo --------------
        La convención es "verbo + sustantivo" y nada más. En este caso sería "hayCupo()" o "tieneVacante()"
        Otros ejemplos: "quedaStock()", "esPar()", "puedeVolar()", "estaDisponible()"
    */
    verSiHayCupo(cursoID){
        let verificador = false;
        let aux = this.buscarCursoPorID(cursoID);
        if(aux.alumnos.length < aux.cupo){
            verificador = true;
        }
        return verificador;
    }
    /* ------------- TIP: Tener sólo una responsabilidad por función --------------
        Este es el más complejo, pero creo que está bueno mencionarlo. La función buscarAlumnoPorDNI() 
        tiene dos responsabilidades claritas. Asigna un alumno a auxiliarAlumnos y devuelve true/false dependiendo si encontró 
        o no al alumno. Esto puede traer distintos problemas a futuro, en este caso genera confusión cuando se llama al buscador
        en inscribirAlumnoEnCurso(), ya que en la siguiente línea se utiliza a auxiliarAlumno y, viendo el código, es difícil
        sobreentender o asumir que auxiliarAlumnos fue actualizado en el buscador. 
        Entiendo que quizás la consigna lo planteaba de este modo, pero sería más saludable que la función buscarAlumnoPorDNI() 
        devuelva lo que el nombre aparenta, es decir el alumno encontrado o undefined si no lo encuentra. 
        Luego, en vez de usar el buscador dentro del if se puede preguntar si el alumno que devolvió el buscador es undefined o no. 
        Algo asi... 
        
        inscribirAlumnoEnCurso(doc,cursoID){
            let verificador = false;
            let alumnoEncontrado = elCole.buscarAlumnoPorDNI(doc);
            if (alumnoEncontrado && elCole.verSiHayCupo(cursoID)) {
                let cursoAfectado = this.buscarCursoPorID(cursoID);
                cursoAfectado.alumnos.push(alumnoEncontrado);
                let verificador = true;
                console.log (verificador);
                return verificador;
            }
        }
    */

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


