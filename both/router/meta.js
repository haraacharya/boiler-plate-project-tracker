if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Project Tracker',
        suffix: 'Project Tracker'
      }
  });
}
