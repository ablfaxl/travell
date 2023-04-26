export type DataResponseType = {
    resultType: string;
    countryCode: string;
    countryNames: [
      {
        language: string;
        value: string;
      },
      {
        language: string;
        value: string;
      }
    ];
    cities: [
      {
        cityCode: string;
        cityNames: [
          {
            language: string;
            value: string;
          },
          {
            language: string;
            value: string;
          }
        ];
        airports: [
          {
            airportCode: string;
            airportNames: [
              {
                language: string;
                value: string;
              },
              {
                language: string;
                value: string;
              }
            ];
          }
        ];
      }
    ];
  }[];