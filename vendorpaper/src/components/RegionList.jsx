const RegionsList = () => {
    const regions = {
      Africa: ['Nigeria', 'South Africa', 'Kenya', 'Egypt', 'Ethiopia'],
      Asia: ['China', 'India', 'Japan', 'South Korea', 'Indonesia'],
      Europe: ['Germany', 'France', 'United Kingdom', 'Italy', 'Spain'],
      North_America: ['United States', 'Canada', 'Mexico'],
      South_America: ['Brazil', 'Argentina', 'Colombia', 'Chile'],
      Australia: ['Australia', 'New Zealand'],
      Antarctica: ['None'],
    };
  
    return (
      <div className="space-y-2">
        {Object.entries(regions).map(([region, countries]) => (
          <div key={region}>
            <h4 className="font-semibold text-sm">{region}</h4>
            <ul className="list-disc pl-4 text-xs">
              {countries.map(country => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  export default RegionsList;
  