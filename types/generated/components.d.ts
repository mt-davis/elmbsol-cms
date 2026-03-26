import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_items';
  info: {
    description: 'Simple reusable bullet point';
    displayName: 'Bullet Item';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'Title and supporting copy for a repeated marketing block';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetric extends Struct.ComponentSchema {
  collectionName: 'components_shared_metrics';
  info: {
    description: 'Short marketing metric for the homepage hero';
    displayName: 'Metric';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.bullet-item': SharedBulletItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.metric': SharedMetric;
    }
  }
}
