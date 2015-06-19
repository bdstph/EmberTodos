window.TodosApp = Ember.Application.create();

//TodosApp.ApplicationAdapter = DS.FixtureAdapter.extend();

TodosApp.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
