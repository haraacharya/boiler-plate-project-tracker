AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});


AccountsTemplates.addFields([
    {
        _id: 'ustid',
        type: 'text',
        displayName: "UST_ID",
    },
    {
        _id: 'intelid',
        type: 'text',
        displayName: "INTEL_ID",
    }
]);
