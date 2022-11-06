export interface Evaluacion {
  evaluacionId: number;
  cedulaDocente: string;
  fecha: Date;
  nota: number;
  descripcion: string;
}

export interface Archivo {
  id: number;

  archivos: Archivo[];
  archivoOrigenId: number;
  cedulaCreador: string;
  contenido: string;

  /**
   * `true` si el archivo actual es un directorio
   */
  directorio: boolean;

  /**
   * `true` si el archivo actual es editable
   */
  editable: boolean;

  eliminado: boolean;
  estado: string;
  evaluacion: Evaluacion;
  fechaCreacion: Date;
  nombre: string;

  /**
   * ID del directorio padre. -1 si no tiene directorio padre
   */
  padreId: number;
}

export interface Grupo {
  anio: number;
  grado: number;
  grupo: string;
  liceoId: number;
}
