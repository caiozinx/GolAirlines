using Gol_Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gol_Domain.Interfaces.Repository
{
    public interface IRepository<T> where T: BaseEntity
    {
        void Insert(T obj);
        void Update(T obj);
        void Remove(int id);
        T Select(int id);
        IList<T> SelectAll();
    }
}
