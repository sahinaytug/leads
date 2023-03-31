import { LightningElement, api } from 'lwc';

import CAMPAIGN_OBJECT from '@salesforce/schema/Campaign';
import NAME_FIELD from '@salesforce/schema/Campaign.Name';
import TARGET_DONATION_AMOUNT__C_FIELD from '@salesforce/schema/Campaign.Target_Donation_Amount__c';
import ACHIEVED_DONATION_AMOUNT__C_FIELD from '@salesforce/schema/Campaign.Achieved_Donation_Amount__c';
import REMAINING_DONATION_AMOUNT__C_FIELD from '@salesforce/schema/Campaign.Remaining_Donation_Amount__c';
import ENDDATE_FIELD from '@salesforce/schema/Campaign.EndDate';



export default class RecordViewFormStaticContact extends LightningElement {
    // Expose a field to make it available in the template
   recordId = '7018d000001BcycAAC';
   
    objectName = CAMPAIGN_OBJECT;
    fields = [NAME_FIELD, TARGET_DONATION_AMOUNT__C_FIELD, ACHIEVED_DONATION_AMOUNT__C_FIELD,REMAINING_DONATION_AMOUNT__C_FIELD, ENDDATE_FIELD  ];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

    @api dummyData = [{
        "image": "https://www.buffsci.org/img/newImgs/features-11.jpg",
        "heading": "High School Education System",
        "description": "It's new for me also"
    }, {
        "image": "https://www.buffsci.org/img/newImgs/intro-img_v3.png",
        "heading": "Middle School Education System",
        "description": "so what are you thinking"
    }, {
        "image": "https://www.buffsci.org/img/newImgs/about-img_choice.jpg",
        "heading": "Next school",
        "description": "It's ok for 1-10"
    
    }];
}