

    define([
        'jquery',
        'backbone',
        'rapidizer'], 
    function($, Backbone, Rapidizer) {
    var WeddingInvite = Backbone.Model.extend({
        schema: { Name: { type: 'Text', validators: ['required'] }, Email: { type: 'Text', validators: ['required', 'email'] }, MobileNumber: { type: 'Text', validators: ['required', /^[0-9\s\-\+\(\)]{1,20}$/ ]  }, Address: { type: 'TextArea' }, Attendance: { type: 'Select', options: ['Yes', 'No', 'Maybe'], validators: ['required'] }, SpecialRequirements: { type: 'TextArea'}, NameOfGuest: { type: 'Text' } },
        urlRoot: '/submit/scott/testapp/weddinginvite',
        url: function () {
            return '/submit/scott/testapp/weddinginvite/' + this.get('id');
        }
    });

    return WeddingInvite
});
