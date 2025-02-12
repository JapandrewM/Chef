trelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [
      {
        text: 'Enhanced Pretty Print',
        callback: function(t) {
          return t.popup({
            title: 'Pretty Print Options',
            url: './pretty-print-options.html',
            height: 400
          });
        }
      }
    ];
  },

  'card-badges': async function(t, options) {
    const settings = await t.get('board', 'shared', 'prettyPrintSettings', {});
    if (settings.showBadges) {
      return [{
        text: 'Enhanced',
        color: 'green',
      }];
    }
    return [];
  },

  'card-detail-badges': function(t, options) {
    return t.get('card', 'shared', 'prettyPrintData', {}).then(data => {
      if (data) {
        return [{
          title: 'Pretty Print Details',
          text: 'View',
          callback: function(t) {
            return t.modal({
              url: './pretty-print-view.html',
              fullscreen: true,
              args: { data }
            });
          }
        }];
      }
      return [];
    });
  }
});
