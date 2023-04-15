import { Client } from 'appwrite';
import { Account,Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('64386711e048fcc8c156');


export const account = new Account(client)

export const databases = new Databases(client, "64387579106b66ffbce8")