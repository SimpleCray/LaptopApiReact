using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace LaptopAPI.Models
{
    public partial class Laptop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Supplier { get; set; }
        public int? Price { get; set; }
        public string ImgName { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }
}
