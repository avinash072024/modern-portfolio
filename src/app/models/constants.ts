export class Constants {
    public static APP_NAME1: string = 'Modern';
    public static APP_NAME2: string = 'Portfolio';
    public static APP_NAME_COMBINE: string = this.APP_NAME1 + this.APP_NAME2;
    public static APP_NAME: string = this.APP_NAME1 + '-' + this.APP_NAME2;
    public static THEME_KEY: string = this.APP_NAME + '-' + 'theme'.toLowerCase();
    public static SKIN_KEY: string = this.APP_NAME + '-' + 'skin'.toLowerCase();
}
