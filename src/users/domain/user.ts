import {
    BeforeInsert, 
    BeforeUpdate,
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn
} from "typeorm";
import { TokenService } from "../../auth/services/tokenService";

import * as dotenv from "dotenv";

import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

import { UserEntityErrors } from "./errors";
import { TokenPayloadDTO } from "../../infrastructure/dtos/tokens/tokenPayloadDTO";

dotenv.config({
    path: process.env.NODE_ENV = 'dev' ?'.env.dev' : '.env.production'
});

/**
 * 
 * @namespace UsersEntityClass
 * @description User entity class
 * @class
 * 
 */

@Entity('users', {
    schema: "users"
})
export class User {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    status: string;

    @Column()
    role: string;
    
    @Column()
    private username: string;

    @Column()
    private token: string;

    @Column({unique: true})
    private email: string;

    @Column()
    private password: string;

    @Column()
    private account: string; // many to one Account

    @Column()
    private firstName: string;

    @Column()
    private lastName: string; 

    @Column()
    private isActive: boolean;

    @Column()
    private lastLogin: Date;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    private validateEmail():boolean {
        // to be implemented...
        return false;
    }

    private validateUsername(): boolean { 
        // to be implemenetd...
        return false
    }

    // Hash Password 
    @BeforeInsert()
    @BeforeUpdate()
    public async hashPassword() 
    {
        if(this.password) { 
            this.password = await bcrypt.hash(this.password, process.env.BCRYPT_SALTS); 
        }
    }

    // Compare password for authentication
    public async checkPassword(candidatePassword: string): Promise<boolean> { 
        return bcrypt.compare(candidatePassword, this.password);
    }

    public generateAccessToken(): string{ 
        const payload: TokenPayloadDTO = { 
            sub: this.id,
            email: this.email,
            roles: this.role,
            permisions: this.permission



        }
    }



        // // Get First name
        // public get firstName(): string { 
        //     return this.firstName;
        // };
        // // Get Last name
        // public get lastName(): string { 
        //     return this.lastName;
        // };
        // // Get full name
        // public get fullName(): string { 
        //     return `${this.firstName} ${this.lastName}`;
        // };
    
        // // Get Company (account)
        // public get company(): string { 
        //     return this.account;
        // };
    
        // // Get Username
        // public get username(): string { 
        //     return this.username;
        // }
    
        // // Get Email
        // public get email(): string { 
        //     return this.email;
        // }
    
        // // Get Password
        // public get password(): string { 
        //     return this.password;
        // }
    
        // // Get IsActive
        // public get isActive(): boolean { 
        //     return this.isActive
        // }
    
        // // Get LastLogin
        // public get lastLogin(): Date {
        //     return this.lastLogin;
        // }
    
        // // Get Company (account)
        // public set company(account: string){ 
        //     this.account = account;
        // };
    
        // // set Username
        // public set username(username: string){ 
        //     this.username = username;
        // }
        
        // // set Username
        // public set firstName(firstName: string){ 
        //     this.firstName = firstName;
        // };
        // // set Username
        // public set lastName(lastName: string){ 
        //     this.lastName = lastName;
        // };
    
        // // set Email
        // public set email(email: string){ 
        //     this.email = email;
        // }
    
        // // set Password
        // public set password(password: string){ 
        //     this.password = password;
        // }
    
        // // set IsActive
        // public set isActive(activity: boolean) { 
        //     this.isActive = activity;
        // }
    
        // // set LastLogin
        // public set lastLogin(date: Date){
        //     this.lastLogin = date;
        // }

    /**
     * 
     * ip address
     * device
     * utm
     * cpf
     * rg 
     * telefone 
     * location 
     * lead, ads ? 
     * 
     */


}