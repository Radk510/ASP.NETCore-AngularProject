using Microsoft.EntityFrameworkCore;

namespace FrontEnd.Model
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }
        public DbSet<Note> Notes { get; set; }
    }
}