import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(id): string {
        const data = {
            id: 11,
            email: 'andres@gmail.com'

        }
        if (id === data.id) {
            return `Usuario encontrado ${data.email}`
        } else {
            return 'Error'
        }

    }
    createUser(data): string {
        return `Se creo el usuario ${data.name}`
    }
    deleteUser(): string {
        return "eliminar usuario"
    }
    editUser(id) {

        const data = [
            {
                id: 1,
                name: 'Andres',
                email: 'andres@gmail.com'

            },
            {
                id: 2,
                name: 'Pepe',
                email: 'pepe@gmail.com'

            }
        ]
        data.map((currentUser)=> {
            if(id == currentUser.id){
                console.log(currentUser.email)
                return `update usuario ${currentUser.email}`
            }else{
                return "Err"
            }
        })
    }
}