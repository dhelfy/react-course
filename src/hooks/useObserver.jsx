import { useEffect, useRef } from "react";

export function useObserver(isLoading, canLoad, ref, callback) {
    let observer = useRef()

    useEffect(() => {
        
        // проверяем загружаются ли еще данные и убираем старый обсервер
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        function observer_callback(entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        // создаем новый обсервер
        observer.current = new IntersectionObserver(observer_callback)

        // крепим его к элементу
        observer.current.observe(ref.current)


    }, [isLoading])
}

