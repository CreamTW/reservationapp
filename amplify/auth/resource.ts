import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resourse'; 

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation
  }
});
