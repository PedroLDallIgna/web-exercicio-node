export const validateEmail = (email: string): Boolean => {
    const emailRegex = new RegExp(/^[a-z0-9\.\-\+\_]{2,}\@[a-z]{2,}(\.\w+)*\.[a-z]{2,}$/, 'gi');
    return emailRegex.test(email);
}

export const validateCpf = (cpf: string): Boolean => {
    const cpfRegex = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'gi');
    return cpfRegex.test(cpf);
}

export const validatePhone = (phone: string): Boolean => {
    const phoneRegex = new RegExp(/^\(\d{2}\)\s\d{4,5}\-\d{4}$/);
    return phoneRegex.test(phone);
} 
