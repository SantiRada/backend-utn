export const CreateResponse = (method, resource, data) => {
    let response;
    let errors = [];

    switch(method){
        case "GET":
            if(data.length <= 0){
                errors = [ `No se puede mostrar el ${resource}` ];
            }

            response = {
                status: data.length <= 0 ? 'error' : 'ok',
                code: data.length <= 0 ? 404 : 200,
                data,
                errors
            };
            break;
        case "POST":
            if(data == null){
                errors = [ `No se puede crear el ${resource}` ];
            }
            response = {
                status: data == null ? 'error' : 'ok',
                code: data == null ? 500 : 201,
                data,
                errors
            };
            break;
        case "PUT":
            if(data == null){
                errors = [ `No se puede actualizar el ${resource}` ];
            }
            response = {
                status: data == null ? 'error' : 'ok',
                code: data == null ? 500 : 203,
                data,
                errors
            };
            break;
        case "DELETE":
            if(data == null){
                errors = [ `No se puede eliminar el ${resource}` ];
            }
            response = {
                status: data == null ? 'error' : 'ok',
                code: data == null ? 404 : 200,
                data,
                errors
            };
            break;
        default:
            if(data == null){
                errors = [ "No se reconoce el metodo" ];
            }
            response = {
                status: 'error',
                code: 404,
                data: [],
                errors
            };
            break;
    }

    return response;
}