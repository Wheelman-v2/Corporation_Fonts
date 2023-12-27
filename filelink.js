    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Corporation_Fonts/raw/main';
      var specificPaths = {
        'DWImpactamin': 'DWImpactamin/DWImpactamin.zip',
        // 'font2': 'AnotherFolder/another_font.zip',
        // 필요에 따라 링크 추가
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
        }, 0);
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }
