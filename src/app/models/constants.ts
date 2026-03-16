export class Constants {
    public static APP_NAME1: string = 'Personal';
    public static APP_NAME2: string = 'Portfolio';
    public static APP_NAME_COMBINE: string = this.APP_NAME1 +'-'+ this.APP_NAME2;
    public static APP_NAME: string = this.APP_NAME1 + ' ' + this.APP_NAME2;
    public static THEME_KEY: string = (this.APP_NAME_COMBINE + '-' + 'theme').toLowerCase();
    public static SKIN_KEY: string = (this.APP_NAME_COMBINE + '-' + 'skin').toLowerCase();

    // about me
    public static ABOUT_ME: any = {
        firstName: 'avinash', 
        lastName: 'marbhal',
        email: 'avinashmarbhal1994@outlook.com',
        contact: '+91 87964 57407',
        whatsapp: '+91 87964 57407',
        linkedIn: 'https://www.linkedin.com/in/avinash-marbhal-808646264',
        gitHub: 'https://github.com/avinash072024',
        facebook: '',
        instagram: 'https://www.instagram.com/avinash.marbhal.09',
        location: 'Kolhapur, Maharashtra, India'
    }
}
