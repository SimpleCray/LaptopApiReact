using System;
using System.Collections.Generic;

#nullable disable

namespace LaptopAPI.Models
{
    public partial class Laptop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Supplier { get; set; }
        public int? Price { get; set; }
        public string ImgUrl { get; set; }
    }
}
