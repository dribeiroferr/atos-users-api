import { User } from "../../../../users/domain/user";
import * as bcrypt from "bcrypt";

describe('User Entity', () => { 

    let user: User;

    beforeEach(() => { 
        user = new User();
    });

    it('should set and get username', () => { 
        const username: string = 'testusername';
        user.username = username;
        expect(user.username).toEqual(username);
    });

    it('should set and get email', () => { 
        const email: string = 'test@example.com';
        user.email = email;
        expect(user.email).toEqual(email);
    });

    it('should set and get firstname', () => { 
        const firstName: string = 'john';
        user.firstName = firstName;
        expect(user.firstName).toEqual(firstName);
    });

    it('should set and get lastname', () => {
        const lastName: string = 'doe';
        user.lastName = lastName;
        expect(user.lastName).toEqual(lastName);
    });

    it('should hash password before inserting or updating', async () => {
        const password = 'testpassword';
        user.password = password;
    
        // Mock the bcrypt.hash function to return a fixed value
        const mockHash = 'hashedpassword';
        jest.spyOn(bcrypt, 'hash').mockResolvedValue(mockHash as never);
    
        await user.hashPassword();
        expect(bcrypt.hash).toHaveBeenCalledWith(password, expect.any(String));
        expect(user.password).toEqual(mockHash);
      });
    
      it('should compare passwords correctly', async () => {
        const originalPassword = 'testpassword';
        user.password = originalPassword;
        const mockCompare = jest.fn().mockResolvedValue(true);
        const mockBcrypt = {
          compare: mockCompare
        };
        jest.doMock('bcrypt', () => mockBcrypt);
        const result = await user.checkPassword(originalPassword);
        expect(mockCompare).toHaveBeenCalledWith(originalPassword, user.password);
        expect(result).toBe(true);
      });    
 })