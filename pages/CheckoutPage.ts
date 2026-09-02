import {Page} from'@playwright/test';
export class CheckoutPage{
    readonly page: Page;
    readonly firstNameInput;
    readonly lastNameInput;
    readonly postalCodeInput;
    readonly continueButton;
    constructor(page: Page){
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', {name:'continue'});
    }
    async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
}
}