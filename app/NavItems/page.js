'use client'
const navItems = [
    {
      name: "Clients",
      submenu: true,
      sublinks: [
        {
          Head: "",
          sublink: [
            { name: "Client Management", link: "/FleetClient" },
            { name: "Add Client", link: "/AddClient" },
            { name: "Add Map Component", link: "/Map" },
          ],
        },
      ],
    },
    {
      name: "Vehicles",
      submenu: true,
      sublinks: [
        {
          Head: "",
          sublink: [
            { name: "Vehicle Onboarding", link: "/VehicleOnboarding" },
            { name: "Add Lease", link: "/LeaseForm" },
          ],
        },
      ],
    },
  ];
  
  export {navItems};
  
  