TodosApp.Router.map(function() {
  this.resource('todos', { path: '/'}, function () {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});

// route: todos/
TodosApp.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

// route: todos/index/
TodosApp.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

// route: todos/active/
TodosApp.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

// route: todos/completed
TodosApp.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

