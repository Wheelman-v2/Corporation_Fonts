    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Corporation_institution_Fonts/raw/main';
      var specificPaths = {
        'DWDWImpactamin': 'DWImpactamin/DWImpactamin.zip',
        // 'font2': 'AnotherFolder/another_font.zip',
        // Add more link types as needed
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }