import {AuthOptions, User} from "./types";

export async function register(options: AuthOptions): Promise<boolean> {
    const response = await fetch(`/auth/register`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(options)
    });
    return response.status == 201;
}

export async function login(options: AuthOptions): Promise<boolean> {
    const response = await fetch(`/auth/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(options)
    });
    return response.status == 200;
}

export async function logout(): Promise<boolean> {
    const response = await fetch(`/auth/logout`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    });
    return response.status == 200;
}

export async function identify(): Promise<User | null> {
    const response = await fetch(`/auth/identify`, {
        headers: {
            'Accept': 'application/json'
        },
        method: 'GET',
    });
    return response.status == 200 ? await response.json() : null;
}