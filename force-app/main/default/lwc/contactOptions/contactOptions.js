import { LightningElement, api } from 'lwc'

export default class ContactOptions extends LightningElement {
    @api optin_label = 'Opt-In'
    @api optout_label = 'Do Not'

}