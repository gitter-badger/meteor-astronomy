Package.describe({
  summary: 'Model layer for Meteor',
  version: '0.6.1',
  name: 'jagi:astronomy',
  git: 'https://github.com/jagi/meteor-astronomy.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('mongo');
  api.use('minimongo');
  api.use('underscore');

  api.addFiles('lib/global.js', ['client', 'server']);
  api.addFiles('lib/event_manager.js', ['client', 'server']);
  api.addFiles('lib/event_list.js', ['client', 'server']);
  api.addFiles('lib/event_data.js', ['client', 'server']);
  api.addFiles('lib/schema.js', ['client', 'server']);
  api.addFiles('lib/module.js', ['client', 'server']);
  api.addFiles('lib/class.js', ['client', 'server']);

  // Utils.
  api.addFiles('lib/utils/utils.js', ['client', 'server']);
  api.addFiles('lib/utils/transform.js', ['client', 'server']);

  // Events module.
  api.addFiles('lib/modules/events/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/events/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/events/module.js', ['client', 'server']);

  // Fields module.
  api.addFiles('lib/modules/fields/global.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/utils.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_class.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_instance.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/module.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/type.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/types.js', ['client', 'server']);

  // Methods module.
  api.addFiles('lib/modules/methods/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/module.js', ['client', 'server']);

  api.export(['Astro', 'Astronomy'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.use('mongo');
  api.use('minimongo');
  api.use('underscore');

  api.addFiles('lib/global.js', ['client', 'server']);
  api.addFiles('lib/event_manager.js', ['client', 'server']);
  api.addFiles('lib/event_list.js', ['client', 'server']);
  api.addFiles('lib/event_data.js', ['client', 'server']);
  api.addFiles('lib/schema.js', ['client', 'server']);
  api.addFiles('lib/module.js', ['client', 'server']);
  api.addFiles('lib/class.js', ['client', 'server']);

  // Utils.
  api.addFiles('lib/utils/utils.js', ['client', 'server']);
  api.addFiles('lib/utils/transform.js', ['client', 'server']);

  // Events module.
  api.addFiles('lib/modules/events/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/events/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/events/module.js', ['client', 'server']);

  // Fields module.
  api.addFiles('lib/modules/fields/global.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/utils.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_class.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/init_instance.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/module.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/type.js', ['client', 'server']);
  api.addFiles('lib/modules/fields/types.js', ['client', 'server']);

  // Methods module.
  api.addFiles('lib/modules/methods/init_module.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/init_schema.js', ['client', 'server']);
  api.addFiles('lib/modules/methods/module.js', ['client', 'server']);

  api.export(['Astro', 'Astronomy'], ['client', 'server']);

  api.addFiles('test/fields.js', ['client', 'server']);
  api.addFiles('test/methods.js', ['client', 'server']);
  api.addFiles('test/events.js', ['client', 'server']);
});
