import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(id): string{
        const data = {
            id: 11,
            email: 'andres@gmail.com'

        }
        if(id === data.id){
            return `Usuario encontrado ${data.email}`
        }else{
            return 'Error'
        }

    }
    createUser(data): string{
        return `Se creo el usuario ${data.name}`
    }
    deleteUser(): string{
        return "eliminar usuario"
    }
    editUser(id): string{
        const data = {
            id: 1,
            email: 'andres@gmail.com'

        }
        if(id === data.id){
            return `update usuario ${data.email}`
        }else{
            return 'Error'
        }
    }
}