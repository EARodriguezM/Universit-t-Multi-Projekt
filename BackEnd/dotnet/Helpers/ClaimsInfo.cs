using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
namespace Wchter.Helpers
{
    public class ClaimsInfo
    {
        public static string GetUserId()
        {
        var identity = (ClaimsPrincipal)System.Threading.Thread.CurrentPrincipal;
        var userId = identity.Claims.Where(c => c.Type == ClaimTypes.NameIdentifier).Select(c => c.Value).SingleOrDefault();
        return userId;
        }
        public static string GetUsername()
        {
        var identity = (ClaimsPrincipal)System.Threading.Thread.CurrentPrincipal;
        var Username = identity.Claims.Where(c => c.Type == ClaimTypes.Name).Select(c => c.Value).SingleOrDefault();
        return Username;
        }

    }
}