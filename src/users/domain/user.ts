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

import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

import { UserEntityErrors } from "./errors";

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
    readonly _id: string;

    status: string;
    
    private _username: string;

    private _email: string;

    private _password: string;

    private _account: string; // many to one Account

    private _firstName: string;

    private _lastname: string; 

    private _isActive: boolean;

    private _lastLogin: Date;
    
    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date;

    // Get full name
    get fullName(): string { 
        return `${this._firstName} ${this._lastname}`;
    };

    // Get Company (account)
    get company(): string { 
        return this._account;
    };

    // Get Username
    get username(): string { 
        return this._username;
    }

    // Get Email
    get email(): string { 
        return this._email;
    }

    // Get Password
    get password(): string { 
        return this._password;
    }

    // Get IsActive
    get isActive(): boolean { 
        return this._isActive
    }

    // Get LastLogin
    get lastLogin(): Date {
        return this._lastLogin;
    }

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
    async hashPassword() 
    {
        if(this._password) { 
            this._password = await bcrypt.hash(this._password, 8) 
        }
    }

    // Compare password for authentication
    async checkPassword(candidatePassword: string): Promise<boolean> { 
        return bcrypt.compare(candidatePassword, this._password);
    }

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