import { validate } from 'deep-email-validator';

export const validateEmail = async (email) => {
    try {
        const result = await validate({
            email,
            validateRegex: true,
            validateMx: true,
            validateTypo: true,
            validateDisposable: true,
            validateSMTP: true,
        });
        return result;
    } catch (error) {
        return { valid: false, reason: error.message };
    }
};
