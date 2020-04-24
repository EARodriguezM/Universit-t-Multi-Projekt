using System.Threading.Tasks;
using w_chter.Models.Wchter_Login;

namespace w_chter.Repositories
{
    public interface IAuthRepository
    {
        Task<UserLogin> Login (string username, string password);
    }
}