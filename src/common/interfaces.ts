export interface Evaluacion {
  evaluacionId: number;
  cedulaDocente: string;
  fecha: Date;
  nota: number;
  descripcion: string;
}

export interface Archivo {
  id: number;
  contenido: string;
  /**
   * `true` si el archivo actual es un directorio
   */
  directorio: boolean;

  /**
   * `true` si el archivo actual es editable
   */
  editable: boolean;

  nombre: string;
  fechaCreacion: Date;
  cedulaCreador: string;

  /**
   * ID del directorio padre. -1 si no tiene directorio padre
   */
  padreId: number;
  archivoOrigenId: number;
  archivos: Archivo[];
  estado: string;
  eliminado: boolean;
  evaluacion: Evaluacion;
}
