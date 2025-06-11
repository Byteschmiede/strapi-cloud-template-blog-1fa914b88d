import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    description: 'Vorteil oder USP';
    displayName: 'Benefit';
    icon: 'star';
  };
  attributes: {
    beschreibung: Schema.Attribute.Text & Schema.Attribute.Required;
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Enumeration<
      [
        'Award',
        'Users',
        'Star',
        'Shield',
        'Clock',
        'CheckCircle',
        'Zap',
        'Heart',
        'ThumbsUp',
        'TrendingUp',
      ]
    > &
      Schema.Attribute.DefaultTo<'CheckCircle'>;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'Einzelne Frage und Antwort';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    antwort: Schema.Attribute.Text & Schema.Attribute.Required;
    frage: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedService extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    description: 'Service item with features';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: 'Kundenbewertung';
    displayName: 'Testimonial';
    icon: 'message-circle';
  };
  attributes: {
    autor: Schema.Attribute.String & Schema.Attribute.Required;
    bewertung: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    datum: Schema.Attribute.Date;
    projekt_typ: Schema.Attribute.String;
    rolle: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    verifiziert: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefit': SharedBenefit;
      'shared.faq-item': SharedFaqItem;
      'shared.service': SharedService;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
