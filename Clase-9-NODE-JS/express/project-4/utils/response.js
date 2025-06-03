export default function CreateResponse (code, data, errors) {
    let status;

    switch(code){
        case 200: status = 'ok'; break;
        case 201: status = 'created'; break;
        case 404: status = 'not found'; break;
        case 400: status = 'Bad Request'; break;
        case 500: status = 'Internal Server Error'; break;
    }

    return {
        code,
        status,
        data,
        errors
    }
}

export function CreateError(data) {
    let response = [];

    let errors = Object.values(data);

    // return errors[0].universe.path;

    for (let i = 0; i < errors.length; i++) {
        for(let error in errors[i]){

            if(!errors[i][error].path) {
                continue;
            }

            let newError = {
                property: errors[i][error].path,
                type: errors[i][error].kind,
                message: errors[i][error].message
            };

            response.push(newError);
        }
    }

    return response;
}