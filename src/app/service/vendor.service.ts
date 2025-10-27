import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor() {}

  vendors = [
    {
      id: 1,
      name: 'Asha',
      company: 'Asha Supplies',
      email: 'asha@supplies.com',
      phone: '9876543210',
      address: '12 MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Rahul',
      company: 'Mehra Traders',
      email: 'rahul@mehra.com',
      phone: '9123456789',
      address: '45 Park Street',
      city: 'Kolkata',
      state: 'West Bengal',
      country: 'India',
      category: 'Stationery',
    },
    {
      id: 3,
      name: 'Sunita',
      company: 'Rao Exports',
      email: 'sunita@raoexports.com',
      phone: '9988776655',
      address: '7 Industrial Area',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      category: 'Apparel',
    },
    {
      id: 4,
      name: 'Vikram',
      company: 'VS Logistics',
      email: 'vikram@vslogistics.com',
      phone: '9012345678',
      address: '88 Transport Lane',
      city: 'Chandigarh',
      state: 'Punjab',
      country: 'India',
      category: 'Logistics',
    },
    {
      id: 5,
      name: 'Meera',
      company: 'Desai Foods',
      email: 'meera@desaifoods.com',
      phone: '9090909090',
      address: '22 Food Park',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
      category: 'Food',
    },
    {
      id: 6,
      name: 'Arjun',
      company: 'Kapoor Tech',
      email: 'arjun@kapoortech.com',
      phone: '8877665544',
      address: '101 Silicon Street',
      city: 'Noida',
      state: 'Uttar Pradesh',
      country: 'India',
      category: 'IT Services',
    },
    {
      id: 7,
      name: 'Lata',
      company: 'Iyer Crafts',
      email: 'lata@iyercrafts.com',
      phone: '7766554433',
      address: '6 Artisan Alley',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      category: 'Handicraft',
    },
    {
      id: 8,
      name: 'Nitin',
      company: 'Verma Chemicals',
      email: 'nitin@verma.com',
      phone: '9655443322',
      address: '50 Chem Road',
      city: 'Vadodara',
      state: 'Gujarat',
      country: 'India',
      category: 'Chemicals',
    },
    {
      id: 9,
      name: 'Priya',
      company: 'Nair Interiors',
      email: 'priya@nairinteriors.com',
      phone: '9044332211',
      address: '9 Decor Drive',
      city: 'Thiruvananthapuram',
      state: 'Kerala',
      country: 'India',
      category: 'Interiors',
    },
    {
      id: 10,
      name: 'Karan',
      company: 'Bhat Security',
      email: 'karan@bhatsec.com',
      phone: '9133221100',
      address: '3 Secure Park',
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India',
      category: 'Security',
    },
  ];

  getVendors() {
    return this.vendors;
  }
  addVendor(newVendor: any) {
    this.vendors.push(newVendor);
  }
  updateVendor(updatedVendor: any) {
    console.log('updatedVendor:', updatedVendor);
    const index = this.vendors.findIndex(
      (v) => v.phone === updatedVendor.phone
    );

    if (index !== -1) {
      this.vendors[index] = updatedVendor;
    }
  }
}
