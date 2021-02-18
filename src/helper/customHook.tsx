import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setDialog, showDialog, toggleDrawer } from 'src/store/component'
import { Component, State } from 'Store'

export const useFetch = async ({
  action = null as any,
  param = {},
  watch = [] as any,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action({ ...param }))
    }
    f()
  }, watch)
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// [state, setter]
export const useDrawer = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDrawerOpen } = component
  return {
    isDrawerOpen,
    setIsDrawerOpen: () => dispatch(toggleDrawer()),
  }
}

export const useDialog = () => {
  const { component = {} as Component } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const { isDialogOpen } = component
  return {
    isDialogOpen,
    title: component.dialog.title,
    component: component.dialog.component,
    setIsDialogOpen: (open: boolean) =>
      dispatch(showDialog({ isDialogOpen: open })),
    setDialogComponent: ({
      title = '' as string,
      component = '' as any,
    }) => dispatch(setDialog({ dialog: { title, component } })),
  }
}

export const useIsLocation = (path = '' as string) => {
  const { pathname } = useLocation()
  return pathname.includes(path)
}
