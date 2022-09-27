using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace idvlabs_backend.Models
{
    [Table("contents")]
    public class Content
    {
        
        public int id { get; set; }
        public string contents { get; set; }
    }
}
