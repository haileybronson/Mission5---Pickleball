using Microsoft.AspNetCore.Mvc;
using Mission5.Models;
using System.Diagnostics;

namespace Mission5.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Hailey()
        {
            return View();
        }

    }
}
